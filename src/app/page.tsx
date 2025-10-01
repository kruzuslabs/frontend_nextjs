import { Input } from "@/components/ui/input";

import { CopyButton } from '@/components/ui/shadcn-io/copy-button';
export default function Home() {
  return (
    <>

      <div className="flex flex-col gap-2 w-full">
        {/* First line: input + button centered */}
        <div className="flex justify-center w-full">
          <div className="flex items-center gap-2 w-md">
            <Input type="email" placeholder="URL to shorten" className="flex-1 w-full" />
            <CopyButton content="Content to copy" size="md" />
          </div>
        </div>

        {/* Second line: full-width element */}

      </div>



    </>
  );
}
