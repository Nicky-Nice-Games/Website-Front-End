import { ContentNavigator } from "@/components/content/content-navigator";

const ContentPage = () => {
  return (
    <>
      <ContentNavigator currentPage="content" />
      <div className="flex flex-col-reverse md:grid md:grid-cols-2">
        <div>
          <h3 className="text-center text-4xl m-2 font-black">
            About the Location
          </h3>
          <p className="m-3">
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
          className="rounded-lg w-[97%] m-auto"
          src="images/tracks/RIT.jpg"
        ></img>
      </div>
    </>
  );
};

export { ContentPage };
