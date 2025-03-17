import {useParams, useLocation} from 'react-router';

export function usePage() {
  const location = useLocation();
  const params = useParams();

  if (location.pathname.match(/\/add$/)) {
    return {
      isCreate: true,
      isEdit: false,
      isView: false,
    };
  }

  return {
    isCreate: params.displayType === 'add',
    isEdit: params.displayType === 'edit',
    isView: params.displayType === 'view',
  };
}
