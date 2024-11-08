import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';

export function useInquiries() {
  return useQuery({
    queryKey: ['inquiries'],
    queryFn: async () => {
      const response = await fetch('/api/inquiries');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return data?.inquiries ?? [];
    },
  });
}

export function useInquiry(inquiryId) {
  return useQuery({
    queryKey: ['inquiry', inquiryId],
    queryFn: async () => {
      const response = await fetch(`/api/inquiries/${inquiryId}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return data.inquiry;
    },
  });
}

export function useAddInquiry() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newInquiry) => {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newInquiry),
      });
      if (!response.ok) throw new Error('Failed to add inquiry');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['inquiries']);
    },
  });
}

export function useUpdateInquiry() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({inquiryId, updatedInquiry}) => {
      const response = await fetch(`/api/inquiries/${inquiryId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updatedInquiry),
      });
      if (!response.ok) throw new Error('Failed to update inquiry');
      return response.json();
    },
    onSuccess: (data, {inquiryId}) => {
      queryClient.invalidateQueries(['inquiry', inquiryId]);
      queryClient.invalidateQueries(['inquiries']);
    },
  });
}

export function useRemoveInquiry() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (inquiryId) => {
      const response = await fetch(`/api/inquiries/${inquiryId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete inquiry');
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['inquiries']);
    },
  });
}
