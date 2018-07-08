// http://airbnb.io/enzyme/docs/installation/

import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
