import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Post } from "#site/content";
import { slug } from "github-slugger";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);

  return date.toLocaleDateString("id-ID", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function sortPosts(posts: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}

export function getAllSeries(posts: Array<Post>) {
  const allSeries: Record<string, number> = {}

  posts.forEach((post) => {
    post.series?.forEach((series) => {
      allSeries[series] = (allSeries[series] ?? 0) + 1;
    })
  })

  return allSeries;
}

export function sortAllSeriesByDate(posts: Array<Post>) {
  const allSeries: Record<string, { count: number; latestDate: string }> = {};

  posts.forEach(post => {
    const { series, date } = post
    if (!series || series.length === 0) return

    series.forEach(seriesName => {
      if (!allSeries[seriesName]) {
        allSeries[seriesName] = { count: 0, latestDate: date }
      }

      allSeries[seriesName].count += 1;

      //update latestDate jika ada postingan baru
      if (new Date(date) > new Date(allSeries[seriesName].latestDate)) {
        allSeries[seriesName].latestDate = date
      }
    })

  })
  // Convert object ke array dan sort berdasarkan latestDate terbaru
  return Object.entries(allSeries)
    .map(([seriesName, data]) => ({ name: seriesName, ...data }))
    .sort((a, b) => new Date(b.latestDate).getTime() - new Date(a.latestDate).getTime());

}

export function getPostBySeriesSlug(posts: Array<Post>, series: string) {
  return posts.filter((post) => {
    if (!post.series) return false;

    const slugifiedSeries = post.series?.map((seriesItem) => slug(seriesItem))

    return slugifiedSeries.includes(series)
  })
}


export function getAllTags(posts: Array<Post>) {
  const tags: Record<string, number> = {};

  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tags[tag] = (tags[tag] ?? 0) + 1;
    });
  });

  return tags;
}

export function sortTagsByCount(tags: Record<string, number>) {
  return Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
}

export function getPostByTagSlug(posts: Array<Post>, tag: string) {
  return posts.filter((post) => {
    if (!post.tags) return false;
    const slugifiedTags = post.tags.map((tag) => slug(tag));

    return slugifiedTags.includes(tag);
  });
}
