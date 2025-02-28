export default async function getProject(id: number){
    try {
        const url = `http://jayryu.ipTime.org:2680/getProjectOne?pjId=${encodeURIComponent(id)}`;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('네트워크 응답이 정상적이지 않습니다.');
        }
        const data = await res.json();
        return data;
      } catch (error) {
        console.error('프로젝트 리스트를 불러오는 중 에러 발생:', error);
        throw error;
      }

}

