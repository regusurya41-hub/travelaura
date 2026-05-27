import { Share2 } from "lucide-react";
import toast from "react-hot-toast";
import { Button } from "../ui/Button";

export function ShareButton({ itinerary }) {
  async function handleShare() {
    const text = `${itinerary.title} - ${itinerary.destination}`;
    if (navigator.share) {
      await navigator.share({ title: itinerary.title, text, url: window.location.href });
      return;
    }

    await navigator.clipboard.writeText(`${text} ${window.location.href}`);
    toast.success("Share link copied");
  }

  return (
    <Button variant="secondary" onClick={handleShare} disabled={!itinerary}>
      <Share2 size={17} /> Share
    </Button>
  );
}
