import { EyeIcon } from "@/components/custom/icons";
import { Button } from "@/components/ui/button";
import { UploadIcon } from "@radix-ui/react-icons";

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="grid gap-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
            Upload Legal Document
          </h1>
          <p className="text-muted-foreground">
            Use our AI-powered legal document assistant to upload and analyze
            your documents.
          </p>
        </div>
        <div className="grid gap-4">
          <input type="file" id="file-upload" className="hidden" />
          <label
            htmlFor="file-upload"
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            <UploadIcon className="h-5 w-5" />
            Upload Document
          </label>
          <Button
            variant="outline"
            className="flex w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium"
          >
            <EyeIcon className="h-5 w-5" />
            View Document
          </Button>
        </div>
      </div>
    </div>
  );
}
