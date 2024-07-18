import { useParams } from "next/navigation";
import { useMemo } from "react";

export const useConversations = () => {
  const params = useParams();
  const conversationId = useMemo(
    () => params?.id || ("" as string),
    [params?.id]
  );
  const isActive = useMemo(() => !!conversationId, [conversationId]);
  return {
    isActive,
    conversationId,
  };
};
