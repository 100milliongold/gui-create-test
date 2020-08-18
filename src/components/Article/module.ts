import { article, request, getAppId } from "typeinside";
import _ from "lodash";

export async function list(galleryId: string) {
  const appId = await getAppId();

  /** @returns Article[]*/
  let articleList = await article.list(galleryId, appId);

  return { appId, articleList };
}

export async function random_article(galleryId: string) {
  const { articleList, appId } = await list(galleryId);
  // console.log(articleList);
  const random_index = _.random(0, articleList.length, false);
  const random_id = articleList[random_index].index;
  let res = article.detail(galleryId, random_id, appId);
  return res;
}
