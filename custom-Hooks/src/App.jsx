import { useRef, useState } from "react";

import useDebounce from "./hooks/useDebounce";
import useLocalStorage from "./hooks/useLocalStorage";
import useFetch from "./hooks/useFetch";
import usePrevious from "./hooks/usePrevious";
import useOnClickOutside from "./hooks/useOnClickOutside";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {

  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const [name, setName] = useLocalStorage("name", "");

  const {
    data,
    loading,
    error,
  } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );


  const [count, setCount] = useState(0);

  const previousCount = usePrevious(count);


  const boxRef = useRef(null);

  useOnClickOutside(boxRef, () => {
    console.log("Clicked outside the box");
  });


  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="container">

      <h1>Custom Hooks Demo</h1>

      <section>
        <h2>useDebounce</h2>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type something..."
        />

        <p>
          Immediate value: {search}
        </p>

        <p>
          Debounced value: {debouncedSearch}
        </p>
      </section>


      <section>
        <h2>useLocalStorage</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <p>
          Stored name: {name}
        </p>

        <p>
          Refresh the page and check the value.
        </p>
      </section>


      <section>
        <h2>useFetch</h2>

        {loading && <p>Loading...</p>}

        {error && <p>Error: {error}</p>}

        {data && (
          <ul>
            {data.map((user) => (
              <li key={user.id}>
                {user.name}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>usePrevious</h2>

        <p>Current count: {count}</p>

        <p>
          Previous count:{" "}
          {previousCount ?? "None"}
        </p>

        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </section>

      <section>
        <h2>useOnClickOutside</h2>

        <div
          ref={boxRef}
          className="box"
        >
          <p>
            Click inside this box.
          </p>

          <p>
            Then click outside it.
          </p>
        </div>
      </section>


      <section>
        <h2>useMediaQuery</h2>

        <p>
          Current screen:
          {" "}
          {isMobile ? "Mobile" : "Desktop"}
        </p>

        <p>
          Resize your browser window.
        </p>
      </section>

    </div>
  );
}

export default App;