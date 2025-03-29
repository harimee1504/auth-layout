"use client";

import { Settings } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Hint } from "@/components/hint";
import { OrganizationProfile } from "@clerk/clerk-react";

export const ManageOrganizationButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full flex items-center justify-between py-4 px-2 cursor-pointer hover:bg-muted">
          <Hint
            label="Organization settings"
            side="right"
            align="start"
            sideOffset={14}
          >
            <>
              <p>Organization Settings</p>
              <Settings className="w-4 h-4" />
            </>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[300px]">
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
};
