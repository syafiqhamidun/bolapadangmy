type CategoriesType = {
    name: string;
    icon: string;
  };
  
  type StatesType = {
    value: string;
    label: string;
  };
  
  type HomesType = {
    id: any;
    contact_number: any;
    title: any;
    image: any;
    state: any;
    city: any;
    description: any;
    user_id: any;
    created_at: any;
    users: {
      name: any;
    };
  };
  
  type DateStateType = {
    startDate: Date;
    endDate: Date;
    key: string;
  };
  
  type SearchParamsType = {
    country: string;
    weeks: string;
  };
