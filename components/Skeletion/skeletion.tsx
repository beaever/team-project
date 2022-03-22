const Skeleton = () => {
  const dummyData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }];
  return (
    <>
      <ul className='Skeleton_ul'>
        {dummyData.map((v, i) => (
          <li className='Skeleton_li' key={v.id}>
            <h3 className='Skeleton_h3'></h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Skeleton;
