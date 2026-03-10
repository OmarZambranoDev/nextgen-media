import Link from "next/link";
import {
  ArrowRightIcon,
  MagnifyingGlassIcon,
  StarIcon,
  FireIcon,
} from "@heroicons/react/24/outline";

// This will eventually come from your database
const featuredGames = [
  {
    id: 1,
    title: "The Legend of Zelda: Tears of the Kingdom",
    image: "/games/zelda.jpg",
    rating: 9.8,
    genre: "Action-Adventure",
  },
  {
    id: 2,
    title: "Baldur's Gate 3",
    image: "/games/baldurs-gate.jpg",
    rating: 9.6,
    genre: "RPG",
  },
  {
    id: 3,
    title: "Marvel's Spider-Man 2",
    image: "/games/spiderman.jpg",
    rating: 9.0,
    genre: "Action",
  },
  {
    id: 4,
    title: "Cyberpunk 2077: Phantom Liberty",
    image: "/games/cyberpunk.jpg",
    rating: 8.9,
    genre: "RPG",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-900 to-primary-700 px-8 py-16 text-center text-white">
        <div className="relative z-10">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Discover Your Next
            <span className="block text-primary-200">Favorite Game</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100">
            Join thousands of gamers discovering, reviewing, and discussing the
            latest and greatest video games across all platforms.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary-300" />
                <input
                  type="text"
                  placeholder="Search games..."
                  className="w-full rounded-full border-0 bg-white/20 py-4 pl-12 pr-4 text-white placeholder-primary-200 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <button className="rounded-full bg-white px-8 py-4 font-semibold text-primary-700 transition hover:bg-primary-50">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-secondary-900">
            Featured Games
          </h2>
          <Link
            href="/games"
            className="flex items-center gap-1 text-primary-600 hover:text-primary-700"
          >
            View all
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredGames.map((game) => (
            <Link
              key={game.id}
              href={`/games/${game.id}`}
              className="group relative overflow-hidden rounded-xl bg-white shadow-soft transition hover:shadow-medium"
            >
              {/* Image placeholder - you'll add real images later */}
              <div className="aspect-[16/9] bg-gradient-to-br from-primary-100 to-primary-200" />

              <div className="p-4">
                <h3 className="font-semibold text-secondary-900 group-hover:text-primary-600">
                  {game.title}
                </h3>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-secondary-500">
                    {game.genre}
                  </span>
                  <div className="flex items-center gap-1">
                    <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-secondary-700">
                      {game.rating}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Section */}
      <section className="rounded-2xl bg-secondary-50 p-8">
        <div className="flex items-center gap-2">
          <FireIcon className="h-6 w-6 text-orange-500" />
          <h2 className="text-2xl font-bold text-secondary-900">
            Trending Now
          </h2>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-soft"
            >
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary-100 to-primary-200" />
              <div>
                <h3 className="font-semibold text-secondary-900">
                  Game Title {i}
                </h3>
                <p className="text-sm text-secondary-500">
                  1.2k reviews this week
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <div className="rounded-3xl bg-primary-600 px-8 py-16 text-white">
          <h2 className="text-3xl font-bold">Ready to join the community?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-100">
            Create an account to start reviewing games, building your
            collection, and connecting with other gamers.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/auth/signup"
              className="rounded-full bg-white px-8 py-4 font-semibold text-primary-600 transition hover:bg-primary-50"
            >
              Sign Up Free
            </Link>
            <Link
              href="/about"
              className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
