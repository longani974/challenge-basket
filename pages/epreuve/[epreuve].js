import { useRouter } from "next/router";
import Epreuve from "../../components/epreuves/Epreuve";

function epreuve() {
    const router = useRouter();

    const { epreuve } = router.query;
    console.log(epreuve);
    return <Epreuve idEpreuve={`${epreuve}`} />;
}

export default epreuve;
