const initialState = {
    userProfile: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      bio: 'Web Developer',
    },
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      // You can add more actions here based on your requirements
      default:
        return state;
    }
  };
  export default reducer;