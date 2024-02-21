import { debounce } from "debounce";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";

export default function MainLayout() {
  const [items, setItems] = useState([]);
  const [isSearching, setIsSearching] = useState(false); // Initialize isSearching state to false

  const handleSearchName = debounce(async (event) => {
    if (event.target.value === "") {
      setItems([]);
      return;
    }

    setIsSearching(true); // Set isSearching to true when searching starts

    try {
      const response = await fetch(
        `/api/products/search-by-name/${event.target.value}`
      );
      const result = await response.json();

      if (result) {
        setItems(result);
      } else {
        setItems([]);
      }
    } catch (error) {
      console.error(error);
      alert(error);
    } finally {
      setIsSearching(false); // Set isSearching to false when searching is finished
    }
  }, 500);

  return (
    <>
      <div id="MainHeader" className="border-b">
        <nav className="flex items-center justify-between w-full mx-auto max-w-[1200px] px-3 py-5">
          <div className="relative flex items-center border-2 border-gray-900 w-full">
            <button className="absolute left-3">
              <AiOutlineSearch size={22} />
            </button>
            <input
              className="w-full pl-10 pr-8 py-2 placeholder-gray-400 text-sm focus:outline-none"
              onChange={handleSearchName}
              placeholder=""
              type="text"
            />
            {isSearching && (
              <div className="absolute right-3">
                <BiLoaderCircle className="animate-spin" size={22} />
              </div>
            )}
          </div>
          <button className="bg-blue-600 text-sm font-semibold text-white px-6 py-2 ml-4">
            Search
          </button>
        </nav>
        {items.length > 0 && (
          <div className="absolute bg-white max-w-[910px] mt-2 w-full border p-1">
            {items.map((item) => (
              <div className="p-1" key={item.id}>
                <Link href={`/product/${item.id}`}>
                  <div className="flex items-center justify-between w-full cursor-pointer hover:bg-gray-200 p-1 px-2">
                    <div className="flex items-center">
                      <img
                        className="rounded-md"
                        width="40"
                        src={item.url + "/40"}
                      />
                      <div className="truncate ml-2">{item.title}</div>
                    </div>
                    <div className="truncate">
                      {(item.price / 100).toFixed(2)} PLN
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
