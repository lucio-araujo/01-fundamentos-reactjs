import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import "./global.css";
import styles from "./App.module.css";

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarURL: "https://avatars.githubusercontent.com/u/62175962?v=4",
        name: "Lúcio Araújo",
        role: "Web Developer",
      },
      content: [
        {
          type: "paragraph",
          content:
            "Fala, galeraa!👋 Acabei de subir mais um projeto no meu portifólio.",
        },
        {
          type: "paragraph",
          content:
            "É um projeto que fiz no Ignite da Rocketseat. O nome do projeto é: Fundamentos do React 🚀.",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2023-04-07 20:00:00"),
    },
    {
      id: 2,
      author: {
        authorURL: "https://avatars.githubusercontent.com/u/62175962?v=4",
        name: "Lúcio Araújo",
        role: "Web Developer",
      },
      content: [
        {
          type: "paragraph",
          content:
            "Fala, galeraa!👋 Acabei de subir mais um projeto no meu portifólio.",
        },
        {
          type: "paragraph",
          content:
            "É um projeto que fiz no Ignite da Rocketseat. O nome do projeto é: Fundamentos do React 🚀.",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2023-04-10 18:00:00"),
    },
  ];
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post
              key={post.id} 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          })}
        </main>
      </div>
    </div>
  );
}
