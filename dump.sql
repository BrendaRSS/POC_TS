--
-- PostgreSQL database dump
--

-- Dumped from database version 12.13 (Ubuntu 12.13-1.pgdg20.04+1)
-- Dumped by pg_dump version 12.13 (Ubuntu 12.13-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: books; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.books (
    id integer NOT NULL,
    title text NOT NULL,
    author text NOT NULL,
    genre text NOT NULL,
    status text DEFAULT 'not started'::text NOT NULL,
    "startedIn" timestamp without time zone,
    "finishedIn" timestamp without time zone
);


--
-- Name: books_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.books_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: books_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.books_id_seq OWNED BY public.books.id;


--
-- Name: books id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books ALTER COLUMN id SET DEFAULT nextval('public.books_id_seq'::regclass);


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.books VALUES (1, 'The Power of Habit: Why We Do What We Do in Life and Business ', 'Charles Duhigg', 'Personal Development', 'reading', '2023-01-22 16:44:36.952093', '2023-01-22 18:17:45.895723');
INSERT INTO public.books VALUES (4, 'The Postman Always Rings Twice', 'James M. Cain', 'mystery', 'not started', NULL, NULL);
INSERT INTO public.books VALUES (3, 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change', 'Stephen R. Covey', 'Personal Development', 'reading', '2023-01-22 23:55:23.982163', NULL);
INSERT INTO public.books VALUES (5, 'A Short History of Nearly Everything', 'Bill Bryson', 'history of science', 'not started', NULL, NULL);
INSERT INTO public.books VALUES (6, 'Hate List', 'Jennifer Brown', 'novels', 'not started', NULL, NULL);


--
-- Name: books_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.books_id_seq', 6, true);


--
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

