export default ({ env }) => ({
    upload: {
      config: {
        provider: 'strapi-provider-upload-supabase',
        providerOptions: {
          apiUrl: env('SUPABASE_URL'),
          apiKey: env('SUPABASE_API_KEY'), // Use the Service Role Key
          bucket: env('SUPABASE_BUCKET'),
          directory: env('SUPABASE_DIRECTORY', ''), // Optional
          options: {
            cacheControl: 'max-age=31536000', // Cache files for 1 year
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {}, // ⚠️ WARNING: Not implemented by the provider
          delete: {},
        },
      },
    },
  });