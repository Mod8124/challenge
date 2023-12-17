import { FaMapMarkerAlt, FaMapPin } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa6';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail, MdOutlineWorkOutline } from 'react-icons/md';
import { IoIosArrowDropdown } from 'react-icons/io';
import { GoPencil } from 'react-icons/go';

interface IconsFields {
  [key: string]: {
    icon: JSX.Element;
  };
}

export const iconsFields: IconsFields = {
  firstName: {
    icon: <FaRegUser />,
  },
  lastName: {
    icon: <FaRegUser />,
  },
  email: {
    icon: <MdOutlineEmail />,
  },
  phone: {
    icon: <FiPhone />,
  },
  address1: {
    icon: <FaMapMarkerAlt />,
  },
  city: { icon: <FaMapMarkerAlt /> },
  state: { icon: <FaMapPin /> },
  zip: { icon: <FaMapPin /> },
  jobTitle: {
    icon: <IoIosArrowDropdown />,
  },
  reason: { icon: <MdOutlineWorkOutline /> },
  default: {
    icon: <GoPencil />,
  },
};
