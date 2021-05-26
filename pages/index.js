import Head from "next/head";
import Link from "next/link";
import Button from "../components/ui/Button";
import styles from "../styles/Home.module.css";

export default function Home() {
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
                <Link href="ajouter-athlete">
                    <a>
                        <Button
                            bgColor="bg-purple-600"
                            bgColorHover="bg-purple-700"
                        >
                            Ajouter un/une athlète
                        </Button>
                    </a>
                </Link>
            </main>
        </div>
    );
}
