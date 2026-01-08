import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Upload, X, Gift, AlertCircle, Loader2, Sparkles, Mail, AlertTriangle } from "lucide-react";
import { listingSchema } from "@/lib/validations";
import { useBetaListingLimit } from "@/hooks/useBetaListingLimit";

import { regionGroups } from "@/data/alaskaRegions";
import VideoUpload from "@/components/VideoUpload";
import PageTransition, { AnimatedSection } from "@/components/PageTransition";

const categories = [
  { value: "boats", label: "Boats & Watercraft" },
  { value: "fishing-boats", label: "Fishing Boats" },
  { value: "commercial-vessels", label: "Commercial Vessels" },
  { value: "kayaks-canoes", label: "Kayaks & Canoes" },
  { value: "jet-skis", label: "Jet Skis & PWC" },
  { value: "boat-parts", label: "Boat Parts & Accessories" },
  { value: "motors", label: "Outboard Motors" },
  { value: "trailers", label: "Boat Trailers" },
  { value: "other", label: "Other Marine" },
];

// Using centralized region data

const PostListing = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, loading: authLoading } = useAuth();
  const { canPost, currentListings, maxListings, remainingListings, isEmailVerified, loading: betaLoading } = useBetaListingLimit();
  
  const [images, setImages] = useState<File[]>([]);
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const [videos, setVideos] = useState<File[]>([]);
  const [videoPreviews, setVideoPreviews] = useState<string[]>([]);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form state
  const [category, setCategory] = useState('');
  const [region, setRegion] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
    }
  }, [user, authLoading, navigate]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles = Array.from(files);
    if (images.length + newFiles.length > 20) {
      toast({
        title: "Too many images",
        description: "You can upload a maximum of 20 images per listing.",
        variant: "destructive",
      });
      return;
    }

    const validFiles = newFiles.filter((file) => {
      if (!file.type.startsWith("image/")) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not an image file.`,
          variant: "destructive",
        });
        return false;
      }
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: `${file.name} exceeds the 10MB limit.`,
          variant: "destructive",
        });
        return false;
      }
      return true;
    });

    setImages((prev) => [...prev, ...validFiles]);

    validFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setImagePreview((prev) => prev.filter((_, i) => i !== index));
  };

  const uploadImages = async (listingId: string): Promise<string[]> => {
    const uploadedUrls: string[] = [];

    for (const file of images) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${user?.id}/${listingId}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('listing-images')
        .upload(fileName, file);

      if (uploadError) {
        console.error('Upload error:', uploadError);
        continue;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('listing-images')
        .getPublicUrl(fileName);

      uploadedUrls.push(publicUrl);
    }

    return uploadedUrls;
  };

  const validateForm = () => {
    const result = listingSchema.safeParse({
      title,
      description,
      price: price ? parseFloat(price) : 0,
      category,
      region,
      contactName,
      contactEmail,
      contactPhone: contactPhone || undefined,
    });
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Sign In Required",
        description: "Please sign in to post a listing.",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }

    // Beta period checks
    if (!isEmailVerified) {
      toast({
        title: "Email Verification Required",
        description: "Please verify your email address to post listings during our beta period.",
        variant: "destructive",
      });
      return;
    }

    if (!canPost) {
      toast({
        title: "Beta Listing Limit Reached",
        description: `You've reached the maximum of ${maxListings} free listings during beta.`,
        variant: "destructive",
      });
      return;
    }

    if (!agreedToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the Terms of Service and Disclaimer to continue.",
        variant: "destructive",
      });
      return;
    }

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Calculate expiration (60 days from now)
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 60);

      // Create listing first
      const { data: listing, error: listingError } = await supabase
        .from('listings')
        .insert([{
          user_id: user.id,
          category_id: category || null,
          region,
          title: title.trim(),
          price: parseFloat(price),
          description: description.trim(),
          contact_name: contactName.trim(),
          contact_email: contactEmail.trim(),
          contact_phone: contactPhone.trim() || null,
          status: 'pending' as const,
          payment_status: 'pending' as const,
          expires_at: expiresAt.toISOString(),
        }])
        .select()
        .single();

      if (listingError) throw listingError;

      // Upload images if any
      if (images.length > 0 && listing) {
        const imageUrls = await uploadImages(listing.id);
        
        if (imageUrls.length > 0) {
          await supabase
            .from('listings')
            .update({ images: imageUrls })
            .eq('id', listing.id);
        }
      }

      toast({
        title: "🎉 Free Beta Listing Created!",
        description: "Thank you for being a beta user! Your listing is now pending review.",
      });

      navigate('/my-listings');
    } catch (error) {
      console.error('Error creating listing:', error);
      toast({
        title: "Error",
        description: "Failed to create listing. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (authLoading || betaLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Beta Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Beta Launch - Free Listings!</span>
          </div>

          {/* Page Header */}
          <div className="text-center mb-10">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Post Your Listing
            </h1>
            <p className="text-muted-foreground text-sm">
              Fill out the form below to create your free listing. Active for 60 days!
            </p>
          </div>

          {/* Email Verification Warning */}
          {user && !isEmailVerified && (
            <AnimatedSection delay={0.05}>
              <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-destructive text-sm mb-2">Email Verification Required</h3>
                    <p className="text-sm text-muted-foreground">
                      Please verify your email address to post listings during our beta period. Check your inbox for the verification email.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Listing Limit Warning */}
          {user && isEmailVerified && remainingListings === 0 && (
            <AnimatedSection delay={0.05}>
              <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-destructive text-sm mb-2">Beta Listing Limit Reached</h3>
                    <p className="text-sm text-muted-foreground">
                      You've reached the maximum of {maxListings} free listings during our beta period. 
                      Once beta ends, you'll be able to post additional listings.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Beta Pricing Banner */}
          <AnimatedSection delay={0.1}>
            <div className="bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 border-2 border-accent/30 rounded-2xl p-6 mb-10 relative overflow-hidden">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                BETA SPECIAL
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Gift className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">Free during beta!</h3>
                    <p className="text-xs text-muted-foreground">60 days • Up to 20 images • 3 videos (2 min each)</p>
                    <p className="text-xs text-accent font-medium mt-1">
                      {remainingListings} of {maxListings} free listings remaining
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-display font-bold text-accent">FREE</div>
                  <div className="text-xs text-muted-foreground line-through">$20</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Info */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border space-y-6">
              <h2 className="font-display text-lg font-semibold text-foreground">Listing Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-sm">Category *</Label>
                  <Select value={category} onValueChange={setCategory} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="region" className="text-sm">Location *</Label>
                  <Select value={region} onValueChange={setRegion} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[300px]">
                      {regionGroups.map((group) => (
                        <div key={group.name}>
                          <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50">
                            {group.name}
                          </div>
                          {group.regions.map((r) => (
                            <SelectItem key={r.value} value={r.value}>
                              {r.label}
                            </SelectItem>
                          ))}
                        </div>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title" className="text-sm">Listing Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., 2018 Ford F-150 XLT 4x4"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  maxLength={100}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price" className="text-sm">Price ($) *</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  min={0}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your item in detail. Include condition, features, and any relevant history."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows={6}
                  maxLength={2000}
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border space-y-6">
              <h2 className="font-display text-lg font-semibold text-foreground">Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm">Your Name *</Label>
                  <Input 
                    id="name" 
                    placeholder="Full name" 
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm">Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm">Phone (optional)</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="(907) 555-0123"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Image Upload */}
            <AnimatedSection delay={0.3}>
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border space-y-6">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Images <span className="text-muted-foreground font-normal text-sm">(up to 20)</span>
                </h2>
                
                {/* Upload Area */}
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    disabled={images.length >= 20}
                  />
                  <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${images.length >= 20 ? 'border-muted opacity-50' : 'border-border hover:border-primary'}`}>
                    <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
                    <p className="text-foreground font-medium mb-1 text-sm">
                      {images.length >= 20 ? 'Maximum images reached' : 'Drop images here or click to upload'}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      PNG, JPG up to 10MB each
                    </p>
                  </div>
                </div>

                {/* Image Previews */}
                {imagePreview.length > 0 && (
                  <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
                    {imagePreview.map((preview, index) => (
                      <div key={index} className="relative group aspect-square">
                        <img
                          src={preview}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 w-6 h-6 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        {index === 0 && (
                          <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded">
                            Cover
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Video Upload */}
            <AnimatedSection delay={0.35}>
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border space-y-6">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Videos <span className="text-muted-foreground font-normal text-sm">(up to 3, max 2 minutes each)</span>
                </h2>
                <VideoUpload
                  videos={videos}
                  setVideos={setVideos}
                  videoPreviews={videoPreviews}
                  setVideoPreviews={setVideoPreviews}
                  maxVideos={3}
                  maxDurationSeconds={120}
                  maxSizeMB={100}
                />
              </div>
            </AnimatedSection>

            {/* Terms */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border space-y-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground text-sm">Important Information</h3>
                  <ul className="text-xs text-muted-foreground space-y-2 list-disc list-inside">
                    <li>Your free beta listing will be active for 60 days</li>
                    <li>Listings are automatically removed after expiration unless renewed</li>
                    <li>Alaska Listings LLC is a listing service only and does not participate in transactions</li>
                    <li>All transactions are between buyer and seller directly</li>
                    <li>We reserve the right to remove listings that violate our terms</li>
                    <li className="text-accent font-medium">Beta period: {remainingListings} free listings remaining for your account</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                  disabled={!canPost}
                />
                <Label htmlFor="terms" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                  I have read and agree to the{" "}
                  <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>,{" "}
                  <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>, and{" "}
                  <Link to="/disclaimer" className="text-primary hover:underline">Disclaimer</Link>.
                  I understand that Alaska Listings LLC is a listing service only and assumes no liability for transactions.
                </Label>
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="gold"
              size="lg"
              className="w-full"
              disabled={isSubmitting || !agreedToTerms || !canPost}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Creating Free Listing...
                </>
              ) : !isEmailVerified ? (
                <>
                  <Mail className="w-4 h-4 mr-2" />
                  Verify Email to Post
                </>
              ) : !canPost ? (
                "Beta Limit Reached"
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Submit Free Listing
                </>
              )}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PostListing;
