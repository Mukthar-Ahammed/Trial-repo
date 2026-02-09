import { InfinityLoader } from "./ui/loader-13";
import "./LoaderDemo.css";

export default function InfinityLoaderDemo() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background p-4">
      <div className="loader-demo-container">
        <InfinityLoader 
          size={200}
        />
        <p className="loader-demo-text">Loading...</p>
      </div>
    </div>
  );
}
