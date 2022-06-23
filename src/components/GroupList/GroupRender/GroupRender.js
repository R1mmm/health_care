
import React,{useState,useEffect} from 'react'
import styles from './GroupRender.module.css'
import { Link } from 'react-router-dom'

function GroupRender({groupList}) {

    const sortOptions=[
        {value:0,label:"기본순"},
        {value:1,label:"가나다순"},
        {value:2,label:"최신순"},
    ]

    const[sortOption,setSortOptions]=useState(0);
    const [isSorting, setisSorting] = useState(false);
    const[renderBox,setrenderBox]=useState("<div className={styles.GroupListDiv}>{groupList.map((routin)=>(<GroupBox groupList={routin}/>))}</div>")

    const onSortOptionChange = (e) => {
        setSortOptions(e.currentTarget.value);
        setisSorting(true)
    };

    //sortOption 값이 바뀔때마다 실행하는 함수
    useEffect(() => {
        if (isSorting) {
          if (sortOption==0) {
              console.log(sortOption)
              setisSorting(false);
          }
          else{
            console.log(sortOption)
            setisSorting(false);
        }
      }
    }, [isSorting]);




      function GroupBox({ groupList }) {
        return (
            //Link를 통해 props 데이터 전달
            <Link to={`/groupMain/${groupList.groupId}`}
            state={{
                groupList : groupList
                }}>
            <div className={styles.GroupListBox}>
              <p className={styles.Mrate}>출석률     {groupList.rate}</p>
              <p className={styles.MgroupName}>{groupList.groupName}</p>
              <p className={styles.Mmembers}>{groupList.member}/20명</p>
              <p className={styles.MvideoName}>{groupList.VideoName}</p>
              <p className={styles.Mmemo}>{groupList.tag}</p>
            </div>
            </Link>
        )
      }

    return(
        <>
            <select className={styles.sortSelector} onChange={onSortOptionChange}>
                    {sortOptions.map((item,index)=>(
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </select>
            {groupList.length==0 ? (
                <div className={styles.NoGroup}>해당하는 그룹이 없습니다</div>
            ):null}
            <div className={styles.GroupListDiv}>
                {groupList.map((routin)=>(<GroupBox groupList={routin}/>))}
            </div>
        </>
    )
}

export default GroupRender
