import styles from "@/app/components/card/card.module.scss"
import { Card } from '@utils/types/index'

export default function Cards ({id, name, image, description}: Card ) {
    return (
    <>
        <div className={styles.card} id={id}>
            <img src={image} alt={description}/>
            {name}
        </div>
    </>
    );
}
