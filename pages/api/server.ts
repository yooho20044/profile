import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { pjId } = req.query;
  
  try {
    // 실제 API 서버의 URL에 pjId를 포함하여 호출
    const response = await fetch(`http://jayryu.iptime.org:2680/getProjectOne?pjId=${pjId}`);
    
    if (!response.ok) {
      return res.status(response.status).json({ error: '데이터를 불러오는 데 실패했습니다.' });
    }
    
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching project:', error);
    return res.status(500).json({ error: '서버 에러가 발생했습니다.' });
  }
}