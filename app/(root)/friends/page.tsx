"use client";
import AddFriendDialog from "@/components/AddFriendDialog";
import Request from "@/components/Request";
import ConversationFallback from "@/components/shared/conversation/ConversationFallback";
import ItemList from "@/components/shared/item-list/ItemList";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Loader } from "lucide-react";

const FriendsPage = () => {
  const requests = useQuery(api.requests.get);
  return (
    <>
      <ItemList title="Friends" action={<AddFriendDialog />}>
        {requests ? (
          requests.length === 0 ? (
            <p className="w-full h-full flex items-center justify-center">
              No friend Requests found
            </p>
          ) : (
            requests.map((req) => (
              <Request
                key={req.req._id}
                id={req.req._id}
                imageUrl={req.sender.imageUrl}
                username={req.sender.username}
                email={req.sender.email}
              />
            ))
          )
        ) : (
          <Loader className="h-8 w-8" />
        )}
      </ItemList>
      <ConversationFallback />
    </>
  );
};

export default FriendsPage;
