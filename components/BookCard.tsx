import type { Book } from "@/data/portfolio";
import Image from "next/image";

export function BookCard({ book }: { book: Book }) {
  return (
    <div className="h-32 w-32 sm:h-36 sm:w-36 shrink-0 overflow-hidden rounded-xl shadow-md transition hover:scale-105">
      {book.cover ? (
        <div className="relative h-full w-full">
          <Image
            src={book.cover}
            alt={book.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 32vw, 20vw"
          />
        </div>
      ) : (
        <div
          className="flex h-full w-full items-center justify-center p-3"
          style={{ backgroundColor: book.color }}
        >
          <p className="text-center text-xs font-black uppercase leading-tight text-white">
            {book.title}
          </p>
        </div>
      )}
    </div>
  );
}