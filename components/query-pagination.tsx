"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "./ui/pagination";

interface QueryPaginationProps {
  totalPages: number;
  className?: string;
}

export function QueryPagination({
  totalPages,
  className,
}: QueryPaginationProps) {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const createPageUrl = (pageNumber: string | number) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", pageNumber.toString());

    return `${pathName}?${params.toString()}`;
  };

  return (
    <Pagination className={className}>
      <PaginationContent>
        {/* prev button */}
        {prevPage >= 1 ? (
          <PaginationItem>
            <PaginationPrevious
              href={createPageUrl(prevPage)}
            ></PaginationPrevious>
          </PaginationItem>
        ) : null}

        {/* list of numbers page */}
        {Array(totalPages)
          .fill("")
          .map((_, index) => (
            <PaginationItem
              className="hidden sm:inline-block"
              key={`page-button-${index}`}
            >
              <PaginationLink
                isActive={currentPage === index + 1}
                href={createPageUrl(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

        {/* next button */}
        {nextPage <= totalPages ? (
          <PaginationItem>
            <PaginationNext href={createPageUrl(nextPage)}></PaginationNext>
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
}
