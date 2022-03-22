const SkeletonLi = () => {
  const dummyData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  return (
    <>
      <ul className='SkeletonLi_ul '>
        {dummyData.map((v, i) => (
          <li className='SkeletonLi' key={v.id}>
            <h3 className='SkeletonLi_h3'></h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SkeletonLi;
