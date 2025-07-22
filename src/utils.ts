import { millisecondsToSeconds } from "framer-motion";

// Formats a millisecond value into MM:SS:msmsms
const formatTime = (milliseconds: number): string => {
  let seconds = millisecondsToSeconds(milliseconds);
  let minutes = Math.floor(seconds / 60);
  milliseconds %= 1000;
  seconds %= 60;

  const formattedMilliseconds = String(milliseconds).padStart(3, "0");
  const formattedSeconds = String(Math.floor(seconds)).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
};

// Adds a suffix to the index to indicate the placing
const formatPlacing = (index: number): string => {
  if (index > 10 && index < 14) return index + "th";

  let suffix;
  switch (index % 10) {
    case 1:
      suffix = "st";
      break;
    case 2:
      suffix = "nd";
      break;
    case 3:
      suffix = "rd";
      break;
    default:
      suffix = "th";
      break;
  }
  return index + suffix;
};

// Performs a fetch request of any method from the given url
// Callback depends on whether the request succeeds or fails
const fetchData = (
  method: string,
  url: string,
  returnType: string = "json",
  successCallback: Function,
  requestBody?: any,
  failedCallback?: Function
) => {
  const fetchRequest = async (): Promise<any> => {
    const requestParams = {
      method,
      headers: { "Content-Type": "application/json" },
      body: requestBody,
    };
    const response: Response = await fetch(url, requestParams);
    const playerData =
      returnType === "json" ? await response.json() : await response.text();
    return playerData;
  };

  const playerData = fetchRequest();
  playerData.then(
    (data) => {
      successCallback(data);
    },
    (data) => {
      if (failedCallback) failedCallback(data);
    }
  );
  playerData.catch((err) => {
    console.log(err);
    return false;
  });
};

// Takes all numbers in an object (which is a list of numbers) and returns the sum
const sumNumberListObject = (numberListObject: {
  [propName: string]: number;
}): number => {
  let totalItemsUsed = 0;
  Object.values(numberListObject).forEach((i) => {
    totalItemsUsed += i;
  });
  return totalItemsUsed;
};

export { formatTime, formatPlacing, fetchData, sumNumberListObject };
