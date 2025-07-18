import { ContentNavigator } from "@/components/content/content-navigator";

const ContentPage = () => {
  return (
    <>
      <ContentNavigator currentPage="content" />
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 bg-zinc-950">
        <div>
          <img src="images/gizmo-header.png" alt="Header For Gizmo The Ghost" className="max-w-xl"/>
          <p className="m-3 p-8 text-blue-100 bg-gradient-to-b from-[#0d0032] to-[#180059] rounded-xl text-lg">
            RIT was born of an unlikely institutional marriage of an influential
            cultural association, the Rochester Athenaeum, founded in 1829, and
            a technical training school, the Mechanics Institute, founded in
            1885. The institute adopted the name Rochester Institute of
            Technology in 1944 and awarded its first bachelor of science degree
            in 1955. A 1961 decision to leave downtown Rochester for farmland in
            the suburban town of Henrietta put RIT on its path to pre-eminence
            as a global university. Today, the university’s reputation and reach
            go well beyond Rochester. We have partnerships on nearly every
            continent and overseas campuses located in China, Croatia, Dubai,
            and Kosovo.
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
