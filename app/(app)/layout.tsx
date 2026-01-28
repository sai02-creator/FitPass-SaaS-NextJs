import { AppHeader } from "@/components/app/layout/AppHeader";
import { OnboardingGuard } from "@/components/app/onboarding/OnboardingGuard";
import { ChatStoreProvider } from "@/lib/store/chat-store-provider";

import { SanityLive } from "@/sanity/lib/live";
import { ClerkProvider } from '@clerk/nextjs'

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <ChatStoreProvider>
      <OnboardingGuard>
        <AppHeader />
      {children}
      </OnboardingGuard>
      <SanityLive /> 
      </ChatStoreProvider> 
    </ClerkProvider>
  )
}

export default AppLayout;