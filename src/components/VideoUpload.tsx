import { useState } from "react";
import { X, Video, Upload, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VideoUploadProps {
  videos: File[];
  setVideos: (videos: File[]) => void;
  videoPreviews: string[];
  setVideoPreviews: (previews: string[]) => void;
  maxVideos?: number;
  maxDurationSeconds?: number;
  maxSizeMB?: number;
}

const VideoUpload = ({ 
  videos, 
  setVideos, 
  videoPreviews, 
  setVideoPreviews,
  maxVideos = 3,
  maxDurationSeconds = 120,
  maxSizeMB = 100
}: VideoUploadProps) => {
  const { toast } = useToast();
  const [validating, setValidating] = useState(false);

  const validateVideoDuration = (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      video.preload = 'metadata';
      
      video.onloadedmetadata = () => {
        window.URL.revokeObjectURL(video.src);
        if (video.duration > maxDurationSeconds) {
          toast({
            title: "Video too long",
            description: `${file.name} exceeds ${maxDurationSeconds / 60} minute limit (${Math.round(video.duration)}s).`,
            variant: "destructive",
          });
          resolve(false);
        } else {
          resolve(true);
        }
      };

      video.onerror = () => {
        toast({
          title: "Invalid video",
          description: `${file.name} could not be processed.`,
          variant: "destructive",
        });
        resolve(false);
      };

      video.src = URL.createObjectURL(file);
    });
  };

  const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles = Array.from(files);
    
    if (videos.length + newFiles.length > maxVideos) {
      toast({
        title: "Too many videos",
        description: `You can upload a maximum of ${maxVideos} videos per listing.`,
        variant: "destructive",
      });
      return;
    }

    setValidating(true);
    const validFiles: File[] = [];

    for (const file of newFiles) {
      // Check file type
      if (!file.type.startsWith("video/")) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not a video file.`,
          variant: "destructive",
        });
        continue;
      }

      // Check file size
      if (file.size > maxSizeMB * 1024 * 1024) {
        toast({
          title: "File too large",
          description: `${file.name} exceeds the ${maxSizeMB}MB limit.`,
          variant: "destructive",
        });
        continue;
      }

      // Check duration
      const isValidDuration = await validateVideoDuration(file);
      if (isValidDuration) {
        validFiles.push(file);
      }
    }

    if (validFiles.length > 0) {
      setVideos([...videos, ...validFiles]);
      
      // Create previews
      validFiles.forEach((file) => {
        const url = URL.createObjectURL(file);
        setVideoPreviews([...videoPreviews, url]);
      });
    }

    setValidating(false);
  };

  const removeVideo = (index: number) => {
    if (videoPreviews[index]) {
      URL.revokeObjectURL(videoPreviews[index]);
    }
    setVideos(videos.filter((_, i) => i !== index));
    setVideoPreviews(videoPreviews.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      <div className="relative">
        <input
          type="file"
          accept="video/*"
          multiple
          onChange={handleVideoUpload}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          disabled={videos.length >= maxVideos || validating}
        />
        <div className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors ${
          videos.length >= maxVideos || validating
            ? 'border-muted opacity-50' 
            : 'border-border hover:border-primary'
        }`}>
          <Video className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
          <p className="text-foreground font-medium mb-1 text-sm">
            {validating 
              ? 'Validating video...' 
              : videos.length >= maxVideos 
                ? 'Maximum videos reached' 
                : 'Drop videos here or click to upload'
            }
          </p>
          <p className="text-xs text-muted-foreground">
            MP4, MOV, AVI up to {maxSizeMB}MB each • Max {maxDurationSeconds / 60} minutes
          </p>
        </div>
      </div>

      {/* Duration Warning */}
      <div className="flex items-start gap-2 p-3 rounded-lg bg-accent/10 border border-accent/20">
        <AlertCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
        <p className="text-xs text-muted-foreground">
          Videos must be {maxDurationSeconds / 60} minutes or less. Longer videos will be rejected.
        </p>
      </div>

      {/* Video Previews */}
      {videoPreviews.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {videoPreviews.map((preview, index) => (
            <div key={index} className="relative group aspect-video rounded-xl overflow-hidden bg-muted">
              <video
                src={preview}
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              />
              <button
                type="button"
                onClick={() => removeVideo(index)}
                className="absolute top-2 right-2 w-8 h-8 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoUpload;
