import useSWR from 'swr';
import API from '../../service/api';

// SWR 사용 예시
const fetcher = async (url: string, idx: string) => {
	// const res = await API.board.boardListDetail({ idx: idx });
	// const data = res.data as BoardListDetailResponseDataModel;
	// if (data.code === 200) {
	//   return data.data;
	// } else {
	//   return null;
	// }
};

const useBoardListDetailSelection = (idx: string) => {
	const { data, mutate, isValidating, error } = useSWR(
		['load-board-list-detail-selection', idx],
		fetcher,
	);

	return { data, loading: isValidating };
};

export default useBoardListDetailSelection;
