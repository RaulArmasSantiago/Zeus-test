import * as Yup from 'yup'

import {name, last_name, birthday} from '../../utils/yup'

export const ADD_EMPLOYEE = Yup.object().shape({ name, last_name, birthday })