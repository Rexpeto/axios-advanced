import { useEffect, useState } from "react";
import { TestingService } from "./services";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilitiesConfig } from "./utilities";

const App = () => {
  const [rick, setRick] = useState([] as any);

  const fetchRick = async () => {
    const {
      data: { results },
    } = await TestingService();
    setRick(results);
  };

  useEffect(() => {
    try {
      fetchRick();
    } catch (error: any) {
      console.log(error);
    }
  }, []);
  return (
    <SnackbarProvider>
      <SnackbarUtilitiesConfig />
      <main className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Results:</h1>
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-4 container mx-auto">
          {rick &&
            rick.map((item: any) => (
              <div
                key={item.id}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800/50 dark:border-gray-700"
              >
                <img
                  className="rounded-t-lg w-full"
                  src={item.image}
                  alt={item.name}
                />

                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.origin.name}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </main>
    </SnackbarProvider>
  );
};

export default App;
