import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import CardStats from "../components/stats/CardStats";
import Button from "../components/ui/Button";
import styles from "../styles/Home.module.css";

export default function Home() {
    const [data, setData] = useState();

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("joueurs")));
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="L'application pour réussir les challenges basket"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="flex flex-col gap-y-4">
                    <div className="flex justify-around">
                        <CardStats data={data} epreuveId="1" />
                        <CardStats data={data} epreuveId="2" />
                    </div>
                    <div className="flex justify-around">
                        <CardStats data={data} epreuveId="3" />
                        <CardStats data={data} epreuveId="4" />
                    </div>
                </div>

                <Link href="/choisir-une-epreuve">
                    <a>
                        <Button
                            bgColor="bg-purple-600"
                            bgColorHover="bg-purple-700"
                        >
                            Choisir une épreuve
                        </Button>
                    </a>
                </Link>
                <Link href="/ajouter-athlete">
                    <a>
                        <Button
                            bgColor="bg-purple-600"
                            bgColorHover="bg-purple-700"
                        >
                            Ajouter un/une athlète
                        </Button>
                    </a>
                </Link>
                <Link href="/liste-des-joueurs">
                    <a>
                        <Button
                            bgColor="bg-purple-400"
                            bgColorHover="bg-purple-600"
                        >
                            Liste des joueurs/joueuses
                        </Button>
                    </a>
                </Link>
            </main>
        </div>
    );
}
