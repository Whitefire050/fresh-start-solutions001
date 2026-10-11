import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "廢生菜的處理研究｜社會實踐第八組" },
    { name: "description", content: "社會實踐第八組探討格外生菜的浪費問題，研究加工、季節與天氣的影響。" },
    { property: "og:title", content: "廢生菜的處理研究｜社會實踐第八組" },
    { property: "og:description", content: "從一顆格外生菜開始，探索減少浪費的可能。" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return <iframe title="社會實踐第八組：廢生菜的處理研究" src="/student-site/index.html" className="standalone-site" />;
}
