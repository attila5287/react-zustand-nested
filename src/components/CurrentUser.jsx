import useStore from "../store/useStore";

export default function CurrentUser({ selectedUserId }) {
  const { users } = useStore();
  
  return (
    <div className="card p-2">
      <h6 className="text-muted border-bottom mb-0">
        Current User (randomuser.me/API)
      </h6>
      <pre>{JSON.stringify(users[selectedUserId], null, 2)}</pre>
    </div>
  );
}