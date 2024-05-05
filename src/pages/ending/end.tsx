import { useEffect, useState } from 'react'
import styles from './style.module.scss'
// import { useNavigate } from 'react-router-dom'
// import { FETCHBYID, VERIFYANS } from '../../functions/question.function';

const Ending = () => {
    // const navigate = useNavigate();

    const [teamName, setTeamName] = useState('')
    // const [ansCode, setAnsCode] = useState('')
    
    useEffect(() => {
        const fetchQues = async()=> {
            const localData = JSON.parse(localStorage.getItem('teamInfo') as string)
            // console.log(res)
            setTeamName(localData.teamName)
        }

        fetchQues()
    },[])


    return (
        <div className={styles.create__main__container}>
            <div>
                <div className={styles.team__name}>
                <p>Team Name :</p>
                <p className={styles.name}>{teamName}</p>
                </div>
                <div className={styles.treasure__container}>
                    <p><b>🎊 Congratulations!! 🎉</b></p>
                    <p>You have successfully completed the Hunt!</p>
                    <div className={styles.gif__container}>
                        <img src="https://media4.giphy.com/media/g9582DNuQppxC/200.gif" className="cursor-zoom-in max-h-full max-w-full mb-md s:mb-0" alt="GIF Image" />
                    </div>
                    <p>Please contact our co-ordinators.</p>
                    <p>Thank you for participating in Labyrinth.</p>
                </div>
            </div>
        </div>
    )
}

export default Ending