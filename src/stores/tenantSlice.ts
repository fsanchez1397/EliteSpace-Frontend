import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TenantState {
  tenantId: string | null;
}

const initialState: TenantState = {
  tenantId: null,
};

const tenantSlice = createSlice({
  name: 'tenant',
  initialState,
  reducers: {
    setTenantId: (state, action: PayloadAction<string>) => {
      state.tenantId = action.payload;
    },
    clearTenantId: (state) => {
      state.tenantId = null;
    },
  },
});

export const { setTenantId, clearTenantId } = tenantSlice.actions;
export default tenantSlice.reducer;
