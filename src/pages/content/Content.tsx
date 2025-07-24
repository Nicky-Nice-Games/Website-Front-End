import { ContentNavigator } from "@/components/content/content-navigator";

const ContentPage = () => {
  return (
    <>
      <ContentNavigator currentPage="content" />
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 bg-zinc-950">
        <div>
          <img
            src="images/gizmo-header.png"
            alt="Header For Gizmo The Ghost"
            className="max-w-[90vw] md:max-w-xl"
          />
          <p className="m-3 p-8 text-blue-100 bg-gradient-to-b from-[#0d0032] to-[#180059] rounded-xl text-lg">
            A curious ghost that lingers in the IGM Open Lab Carved a life-size
            wooden doll to possess as a physical body Timid but optimistic;
            believes in a good future for games Has a box of trinkets and
            knickknacks to share
          </p>
        </div>
        <img
          className="rounded-lg w-[54%] h-auto m-auto py-[2rem]"
          src="images/overview-gizmo.png"
        ></img>
      </div>
    </>
  );
};

export { ContentPage };
