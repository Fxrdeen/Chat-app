"use client";
import Body from "@/components/Body";
import ChatInput from "@/components/ChatInput";
import Header from "@/components/Header";
import ConversationContainer from "@/components/shared/conversation/ConversationContainer";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { Loader2 } from "lucide-react";

const ConversationPage = ({
  params,
}: {
  params: { id: Id<"conversations"> };
}) => {
  const conversation = useQuery(api.conversation.get, {
    id: params.id,
  });
  return conversation === undefined ? (
    <div className="w-full h-full flex items-center">
      <Loader2 className="h-8 w-8" /> :
    </div>
  ) : conversation === null ? (
    <p className="w-full h-full flex items-center justify-center">
      Conversation not found
    </p>
  ) : (
    <ConversationContainer>
      <Header
        imageUrl={
          conversation.isGroup ? undefined : conversation.otherMember.imageUrl
        }
        name={
          (conversation.isGroup
            ? conversation.name
            : conversation.otherMember.username) || ""
        }
      />
      <Body />
      <ChatInput />
    </ConversationContainer>
  );
};

export default ConversationPage;
