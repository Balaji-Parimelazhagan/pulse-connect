-- Insert values into the role table
INSERT INTO public.role (id, name)
VALUES
    (gen_random_uuid(), 'ADMIN'),
    (gen_random_uuid(), 'SUPER_ADMIN'),
    (gen_random_uuid(), 'USER'),
    (gen_random_uuid(), 'SUPER_USER')
ON CONFLICT DO NOTHING;

-- Insert values into the department table
INSERT INTO public.department (id, name, description)
VALUES
    (gen_random_uuid(), 'WORKFORCE_MANAGEMENT', 'Workforce Management Department'),
    (gen_random_uuid(), 'HR', 'Human Resources Department'),
    (gen_random_uuid(), 'SYSTEM_ADMIN', 'System Administration Department'),
    (gen_random_uuid(), 'PREMISES_ADMIN', 'Premises Administration Department'),
    (gen_random_uuid(), 'MANAGEMENT', 'Management Department')
ON CONFLICT DO NOTHING;

-- Insert values into the user table
INSERT INTO public."user" (id, name, external_id, role, department)
VALUES
    (gen_random_uuid(), 'balaji', NULL, (SELECT id FROM public.role WHERE name = 'USER'), NULL),
    (gen_random_uuid(), 'sujith', NULL, (SELECT id FROM public.role WHERE name = 'SUPER_ADMIN'), (SELECT id FROM public.department WHERE name = 'MANAGEMENT')),
    (gen_random_uuid(), 'ashok', NULL, (SELECT id FROM public.role WHERE name = 'ADMIN'), (SELECT id FROM public.department WHERE name = 'HR')),
    (gen_random_uuid(), 'bharani', NULL, (SELECT id FROM public.role WHERE name = 'ADMIN'), (SELECT id FROM public.department WHERE name = 'SYSTEM_ADMIN')),
    (gen_random_uuid(), 'prabakar', NULL, (SELECT id FROM public.role WHERE name = 'ADMIN'), (SELECT id FROM public.department WHERE name = 'WORKFORCE_MANAGEMENT')),
    (gen_random_uuid(), 'naresh', NULL, (SELECT id FROM public.role WHERE name = 'ADMIN'), (SELECT id FROM public.department WHERE name = 'PREMISES_ADMIN'))
ON CONFLICT DO NOTHING;
