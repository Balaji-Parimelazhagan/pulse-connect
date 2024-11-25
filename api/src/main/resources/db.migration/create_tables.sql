CREATE TABLE IF NOT EXISTS public.role (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.department (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(50) NOT NULL,
    description TEXT
);

CREATE TABLE IF NOT EXISTS public.user (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    external_id VARCHAR(50),
    role UUID REFERENCES public.role(id) ON DELETE SET NULL ON UPDATE CASCADE,
    department UUID REFERENCES public.department(id) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS public.form (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    template TEXT,
    created_by UUID,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS public.survey (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT,
    form UUID REFERENCES public.form(id) ON DELETE CASCADE,
    description TEXT,
    created_by UUID,
    status VARCHAR(20) DEFAULT 'PENDING',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS public.action_item (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    snippet TEXT NOT NULL,
    description TEXT,
    survey UUID REFERENCES public.survey(id) ON DELETE CASCADE,
    priority VARCHAR(20) DEFAULT 'MEDIUM',
    status VARCHAR(20) DEFAULT 'PENDING',
    created_by UUID,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by UUID,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS public.dispute (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    snippet TEXT NOT NULL,
    description TEXT,
    priority VARCHAR(20) DEFAULT 'HIGH',
    status VARCHAR(20) DEFAULT 'PENDING',
    assignee UUID REFERENCES public.user(id),
    peer_user UUID REFERENCES public.user(id),
    created_by UUID,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_by UUID,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
