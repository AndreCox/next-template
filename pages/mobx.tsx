import Input from "../components/Input";
import { store } from "./../stores/Store";
import { observer } from "mobx-react-lite";
import Link from "next/link";

const MobX = observer(() => {
  return (
    <div className="text-center p-4 pt-24">
      <Link href="/">
        <a className="text-blue-500 under text-xl absolute top-0 left-0 pl-4 pt-2">
          Back to home
        </a>
      </Link>
      <h1 className="font-bold text-4xl">MobX State Management Demo</h1>
      <div className="pt-4 flex flex-1 flex-col sm:flex-row justify-center sm:space-x-8 space-y-8 sm:space-y-0">
        <Input
          value={store.inputText}
          onChange={(e) => {
            store.inputText = e.target.value;
          }}
        />
        <Input
          value={store.outputText}
          onChange={(e) => {
            store.outputText = e.target.value;
          }}
        />
      </div>
      <div className="pt-8 text-lg font-semibold flex justify-center">
        You have changed the store
        <p className="text-blue-500 whitespace-nowrap px-1">
          {store.timesUpdated}
        </p>
        times.
      </div>
    </div>
  );
});

export default MobX;
