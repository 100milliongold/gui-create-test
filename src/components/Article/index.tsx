import React, { useEffect, useState } from "react";
import { View, Text, Button, useEventHandler } from "@nodegui/react-nodegui";
import { LoginState } from "../../modules/login";
import { QPushButtonSignals } from "@nodegui/nodegui";
import { list, random_article } from "./module";

type articleProps = {
  login_info: LoginState;
  onLogout: () => void;
};

export default function article({ login_info, onLogout }: articleProps) {
  const { galleryName } = login_info;
  const [articles, setArticles] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const btnHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: (...e) => {
        onLogout();
      },
    },
    []
  );

  const resetBtnHandler = useEventHandler<QPushButtonSignals>(
    {
      clicked: (...e) => {
        setLoading(true);
      },
    },
    [loading]
  );

  useEffect(() => {
    if (loading) {
      random_article(galleryName)
        .then((res) => {
          console.log(res);
          const article_list = `<li> 제목 : ${res.title} </li><li> 내용 : ${res.body} </li><li> 일자 : ${res.time} </li>`;
          const article_list_html = `<ul>${article_list}</ul>`;
          setLoading(false);
          setArticles(article_list_html);
        })
        .catch((e) => {
          console.error(e);

          setLoading(true);
        });
    }
  });

  return (
    <View>
      <Text>갤러리 아이디 입력</Text>
      {!loading && <Text>{galleryName}</Text>}

      <Text>{articles}</Text>
      <Button text={`예`} on={resetBtnHandler} />
      <Button text={`아니오`} />
      <Button text={`메인화면`} on={btnHandler} />
    </View>
  );
}
