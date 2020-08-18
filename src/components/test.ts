import { article, request, getAppId } from "typeinside";

export async function test() {
  const appId = await getAppId();

  /** @returns Article[]*/
  let articleList = await article.list("aoegame", appId);

  return articleList;
}
