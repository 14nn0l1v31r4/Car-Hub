

import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/Components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";
import {updateSearchParams}  from "@/utils";
import { NextApiRequest } from "next";

export default async function Home( { searchParams }: { searchParams: NextApiRequest['query'] })  {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2020,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
});

  const isDataEmpty = !Array.isArray(allCars) || 
  allCars.length < 1 || !allCars

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x paddingy max-width" 
      id="discovered">
        <div className="home__text-container">
          <h1 className="text-4x1 font-extrabold">
            Catálogo de Carros</h1>
            <p>Você pode gostar:</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="Combustível" options={fuels} />
            <CustomFilter title="Ano" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore 
            pageNumber={Number(searchParams.limit || 10) / 10}
            isNext={
              typeof searchParams.limit === 'number' && searchParams.limit > allCars.length
            }
            />
          </section>
        ): (
          <div className="home__error-container">
            <h2 className="text-black text-1 font-bold">
              opa sem resultados</h2>
            <p>{allCars?.message}</p>
          </div>
          )}

      </div>
    </main>
  );
}
